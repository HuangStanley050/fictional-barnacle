import User from "../models/User";
import Todo from "../models/Todo";

const todo = {creator: async (parent,args,ctx,info)=>{
  const creatorId = parent.creator;
  let user = await User.findOne({_id:creatorId});
  return user;                        
}};
                                            
export default todo;                   