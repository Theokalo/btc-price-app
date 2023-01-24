import 'react-native';
import { render } from '@testing-library/react-native';
import PriceScreen from '../src/components/priceScreen/PriceScreen';

describe('Render Price screen', () => {
    it("Should has all the elements", () => {
        const page = render(<PriceScreen />);
        const Logo = page.getByTestId('logo_id');
        const ResultsContainer = page.getByTestId('results_container_id');
        const Time = page.getByTestId('time_id');
        const Price = page.getByTestId('price_id');
        const CurrenciesList = page.getByTestId('currencies_list_id');
        const BtnGetPrice = page.getByTestId('btn_id');

        expect(Logo).toBeTruthy();
        expect(ResultsContainer).toBeTruthy();
        expect(Time).toBeTruthy();
        expect(Price).toBeTruthy();
        expect(CurrenciesList).toBeTruthy();
        expect(BtnGetPrice).toBeTruthy();
    });
});