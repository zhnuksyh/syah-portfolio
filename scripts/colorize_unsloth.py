from PIL import Image
import os

def lighten_base(input_path, output_path):
    # Lighten the Black hair to a Dark Grey for the BASE icon
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return
            
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        newData = []
        
        # Target Grey for Hair: #4b5563 (Gray-600) -> (75, 85, 99)
        # Or just a neutral dark grey: (60, 60, 60)
        target_grey = (60, 60, 60)

        for item in datas:
            r, g, b, a = item
            if a > 0:
                brightness = sum([r, g, b]) / 3
                if brightness <= 60: # It's the black hair
                    newData.append((target_grey[0], target_grey[1], target_grey[2], a))
                else:
                    newData.append(item) # Keep face as is (likely greyish already)
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Created {output_path}")
    except Exception as e:
        print(e)
        
# Re-run white face generation for completeness (Targeting Hover)
def make_white_face(input_path, output_path):
     # Same logic as before
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        newData = []
        target_color = (255, 255, 255)
        for item in datas:
            r, g, b, a = item
            if a > 0:
                brightness = sum([r, g, b]) / 3
                if brightness > 60: # Face
                    newData.append((target_color[0], target_color[1], target_color[2], a))
                else:
                    newData.append(item) # Hair stays original black
            else:
                newData.append(item)
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Created {output_path}")
    except Exception as e:
        print(e)

lighten_base("src/assets/icons/unsloth-final.png", "src/assets/icons/unsloth-base-grey.png")
make_white_face("src/assets/icons/unsloth-final.png", "src/assets/icons/unsloth-white.png")
