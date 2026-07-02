package main

import (
	"time"

	"finance-tracker/config"
	"finance-tracker/routes"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// load env (Railway tidak pakai .env, tapi tetap aman dipanggil)
	godotenv.Load()

	// connect database
	config.ConnectDatabase()

	// init gin
	r := gin.Default()

	// CORS — allow multiple origins
	allowedOrigin := os.Getenv("ALLOWED_ORIGIN")
	origins := []string{"http://localhost:5173", "http://localhost:3000"}
	if allowedOrigin != "" {
		origins = append(origins, allowedOrigin)
	}

	r.Use(cors.New(cors.Config{
		AllowOrigins:     origins,
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// setup routes
	routes.SetupRoutes(r)

	// Railway provides PORT env
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	r.Run(":" + port)
}