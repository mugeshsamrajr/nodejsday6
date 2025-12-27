import Service from "../Models/serviceModel.js";

// Create a new service

export const createService = async (req, res) => {
try {
    const { name, description, price } = req.body;
  const service = new Service({ name, description, price });
  await service.save();
  res.status(200).json({message: "service created Successfully",data:service})
} catch (error) {
  res.status(500).json({message:error.message})
}
}

// get all service
export const getService = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      message:"Service Successfully", data: services
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// update 
export const updateService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const { name,description, price } = req.body;
    const result = await Service.findByIdAndUpdate(
      { _id: serviceId },
      { name, description,price },
      { new: true },
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({
      message: "Updated",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Service Server Error", data: error });
  }
};

// Delete
export const deleteService = async (req, res) => {
  try {
   
    const serviceId = req.params.id;
    const result = await Service.findByIdAndDelete({ _id: serviceId });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Service not found" });
    }
    const service = await Service.find();
    res.status(200).json({
      message: "Delete",
      data: service,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", data: error });
  }
};