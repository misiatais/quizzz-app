
import { TouchableOpacity, Text } from "react-native"

export default function Mybutton({ title = "Aperte", onPress, color = "#FFD700" }){ 
    return (
      <TouchableOpacity 
        style={{ 
          backgroundColor: color, 
          padding: 15, 
          borderRadius: 8,
          marginVertical: 5
        }}
        onPress={onPress}
      >
        <Text style={{ 
          color: 'black', 
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center' 
        }}>
          {title}
        </Text>
      </TouchableOpacity>
    )
}