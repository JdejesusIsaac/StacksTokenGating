require("dotenv").config()

const jwt = require("jsonwebtoken")
const { fetchOwner } = require("./tokenGate.js") // assuming you have exported the `fetchOwner` function from another file

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]
  if (token == null) return res.sendStatus(401)

  try {
    const { contractAddress, tokenId } = req.body // assuming you pass contractAddress and tokenId in the request body
    const isOwner = await fetchOwner(contractAddress, tokenId)

    if (!isOwner) {
      return res.status(403).send({ error: "User does not own NFT" })
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
      if (error) {
        console.log(error)
        return res.sendStatus(403)
      }
      req.user = user
      next()
    })
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}
