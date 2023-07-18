const Cour = require("../models/cour");

const SaveCour = async (cour) => {
  const newCour = new Cour(cour);
  try {
    const savedCour = await newCour.save();
    return savedCour;
  } catch (err) {
    console.log("error:", err);
    return "error";
  }
};

const DeleteCour = async (id) => {
  try {
    const deletedCour = await Cour.deleteOne({ courId: id });
    return deletedCour;
  } catch (err) {
    console.log("error:", err);
    return "error";
  }
};

const UpdateCour = async (Cour) => {
  try {
    const updatedCour = await Cour.updateOne(
      { CourId: Cour.CourId },
      {
        $set: {
          description: Cour.description,
          name: Cour.name,
          date: new Date(Cour.date),
          start: Cour.start,
          end: Cour.end,
          image: Cour.image,
        },
      }
    );
    return updatedCour;
  } catch (err) {
    console.log("error:", err);
    return "error";
  }
};

const GetCours = async () => {
  try {
    const cours = await Cour.find();
    return cours;
  } catch (err) {
    console.log("error:", err);
    return "error";
  }
};
module.exports = {
  SaveCour,
  GetCours,
  DeleteCour,
  UpdateCour,
};
