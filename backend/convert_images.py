from PIL import Image
import numpy as np

services = ["ui-ux", "landing-page", "responsive-design", "api-integration", "performance-opt"]

for name in services:
    path_jpg = f"c:/Users/sachi/Desktop/Portfolio/frontend/public/images/services/{name}.jpg"
    path_png = f"c:/Users/sachi/Desktop/Portfolio/frontend/public/images/services/{name}.png"
    
    img = Image.open(path_jpg).convert("RGBA")
    arr = np.array(img, dtype=np.float32)
    
    # Corner color is the background color
    bg_color = (arr[0, 0, :3] + arr[0, -1, :3] + arr[-1, 0, :3] + arr[-1, -1, :3]) / 4.0
    
    # Distance from background color
    diff = np.sqrt(np.sum((arr[:, :, :3] - bg_color) ** 2, axis=2))
    
    # Smooth alpha feathering
    threshold_low = 10.0
    threshold_high = 35.0
    
    alpha = np.clip((diff - threshold_low) / (threshold_high - threshold_low), 0, 1) * 255.0
    arr[:, :, 3] = alpha
    
    result = Image.fromarray(arr.astype(np.uint8))
    result.save(path_png, "PNG")
    print(f"Successfully converted {name}.png")
