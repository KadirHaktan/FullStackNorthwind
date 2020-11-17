
import {createClient,RedisClient,Multi} from "redis"
import {promisifyAll} from "bluebird"

const client=createClient()

promisifyAll(RedisClient.prototype)
promisifyAll(Multi.prototype)


export default client