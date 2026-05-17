const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { message, layout } = req.body;

  let updatedLayout = JSON.parse(JSON.stringify(layout));

  // SIMPLE SAFE LOGIC (NO AI, NO CRASHES)

  if (message.toLowerCase().includes("headline smaller")) {
    for (let id in updatedLayout.nodes) {
      if (updatedLayout.nodes[id].name === "Text") {
        if (updatedLayout.nodes[id].style?.visual?.fontSize) {
          updatedLayout.nodes[id].style.visual.fontSize -= 5;
        }
      }
    }
  }

  if (message.toLowerCase().includes("move")) {
    for (let id in updatedLayout.nodes) {
      if (updatedLayout.nodes[id].name === "Text") {
        updatedLayout.nodes[id].ny -= 0.05;
        updatedLayout.nodes[id].y -= 20;
      }
    }
  }

  if (message.toLowerCase().includes("9:16")) {
    updatedLayout.nodes[updatedLayout.rootNodes[0]].height = 1920;
  }

  return res.json({
    updatedLayout,
    explanation: "Layout updated successfully"
  });
});

module.exports = router;