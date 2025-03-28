import Layout from "./layout/Layout"
import { SavedPropertiesProvider } from './context/SavedPropertiesContext'

function App() {
  return (
    <SavedPropertiesProvider>
      <Layout />
    </SavedPropertiesProvider>
  )
}

export default App
