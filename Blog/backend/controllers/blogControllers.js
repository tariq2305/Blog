const FacultySchema = require("../models/blogPosts");
module.exports.getFacultylist = async (req, res) => {
  try {
    const facultyList = await FacultySchema.find();
    res.send(facultyList);
  } catch (error) {
    console.log("Error fetching faculty list: ", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
};
