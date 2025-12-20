from PIL import Image
import os

def remove_background(path):
    try:
        if not os.path.exists(path):
            print(f"File not found: {path}")
            return

        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        datas = img.getdata()
        newData = []
        
        for item in datas:
            if len(item) == 4:
                r, g, b, a = item
            else:
                r, g, b = item
                a = 255
            # Calculate brightness/whiteness
            # Simple average or max component
            brightness = max(r, g, b)
            
            # Thresholds
            upper = 250 # Above this is totally transparent
            lower = 200 # Below this is opaque
            
            if brightness > upper:
                newData.append((255, 255, 255, 0)) # Transparent
            elif brightness > lower:
                # Linear interpolation for alpha
                # brightness=upper -> alpha=0
                # brightness=lower -> alpha=255
                # alpha = 255 * (upper - brightness) / (upper - lower)
                alpha = int(255 * (upper - brightness) / (upper - lower))
                newData.append((r, g, b, alpha))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(path, "PNG")
        print(f"Processed {path} with soft alpha")

    except Exception as e:
        print(f"Error processing {path}: {e}")

icons = [
    "src/assets/icons/unsloth-custom.png",
    "src/assets/icons/lora-custom.png",
    "src/assets/icons/vllm-custom.png", 
    "src/assets/icons/qdrant-custom.png"
]

for icon in icons:
    remove_background(icon)
