import User from "../models/User.js"; // .js extension is required here, make sure to include them!

// req is where you can get the params or bodies
// res is the content u want to send back to the front end
export const getUser = async (req, res) => {
  try {
    console.log(req)
    // same as const userId = req.params.id;
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
