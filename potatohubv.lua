local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")
local player = Players.LocalPlayer

local url = "https://TU_USUARIO.github.io/POTATOHUB/"

local function prompt()
    local gui = Instance.new("ScreenGui", game.CoreGui)
    local frame = Instance.new("Frame", gui)
    frame.Size = UDim2.fromScale(0.5,0.3)
    frame.Position = UDim2.fromScale(0.25,0.35)
    frame.BackgroundColor3 = Color3.fromRGB(20,20,20)
    frame.BorderSizePixel = 0

    local box = Instance.new("TextBox", frame)
    box.Size = UDim2.fromScale(0.8,0.3)
    box.Position = UDim2.fromScale(0.1,0.25)
    box.PlaceholderText = "Enter Key"
    box.TextScaled = true

    local btn = Instance.new("TextButton", frame)
    btn.Size = UDim2.fromScale(0.5,0.25)
    btn.Position = UDim2.fromScale(0.25,0.6)
    btn.Text = "LOGIN"
    btn.TextScaled = true

    btn.MouseButton1Click:Connect(function()
        if box.Text == "" then return end
        if string.find(game:HttpGet(url), box.Text) then
            gui:Destroy()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/TU_USUARIO/POTATOHUB/main/hub.lua"))()
        else
            btn.Text = "INVALID KEY"
        end
    end)
end

prompt()
