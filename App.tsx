import PriceScreen from './src/components/priceScreen/PriceScreen';
import { ErrorHandler } from './src/components/errorBoundary/ErrorBoundary';

const App = () => {
  return (
    <ErrorHandler>
      <PriceScreen />
    </ErrorHandler>
  );
}

export default App;
