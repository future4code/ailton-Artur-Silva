import { getAllUsers } from "./endpoints/getAlUsers";
import {app} from "./app"



app.get("/users", getAllUsers)



