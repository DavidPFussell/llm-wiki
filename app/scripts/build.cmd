@echo off
"%npm_node_execpath%" "%~dp0..\node_modules\typescript\bin\tsc" -b
if errorlevel 1 exit /b %errorlevel%
"%npm_node_execpath%" "%~dp0..\node_modules\vite\bin\vite.js" build

