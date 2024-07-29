import { Box } from "@react-three/drei";
import { Canvas } from "react-three-fiber";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[20, 20, 20]} />
      <Box>
        <meshStandardMaterial attach="material" color="blue" />
      </Box>
    </Canvas>
  );
}

export default App;
