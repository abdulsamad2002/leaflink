"use server"

import connector from "@/lib/mongodb";
import User from "@/models/User";

// export async function profileFetcher(email) {
//   await connector();
//   const result = User.findOne({ email: email });
//   console.log(result);
//   return result;
// }

// export async function nameAndPfpUpdater(email, data) {
//   console.log(email);
//   console.log(data);
//   await connector();
//   const result = await User.updateOne({ email: email });
//   console.log(result);
//   const returning = await JSON.parse(JSON.stringify(result));
//   return "{ success: true, returning };"
// }