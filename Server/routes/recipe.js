const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/RecipeController");

router.get("/getAllRecipes", recipeController.getAllRecipes);
router.get("/getRecipe/:userId", recipeController.getRecipeByUserId);

router.post("/createRecipe/:userId", recipeController.createRecipe);

router.post("/editRecipeLike/:recipeId", recipeController.updateLike);
router.post("/editRecipeClap/:recipeId", recipeController.updateClap);
router.post("/editRecipeHeart/:recipeId", recipeController.updateHeart);

router.get("/getAllCategories", recipeController.getAllCategories);
router.post("/createCategory", recipeController.createCategory);
router.post("/search", recipeController.search);

router.post("/createCart/:userId", recipeController.createCartByUserId);
router.put("/updateCart/:userId", recipeController.updateCartByUserId);
router.get("/getCart/:userId", recipeController.getCartByUserId);
module.exports = router;
