import { useContext } from 'react';
import { CollapseDrawerContext } from '../pages/contexts/CollapseDrawerContext';

// ----------------------------------------------------------------------

const useCollapseDrawer = () => useContext(CollapseDrawerContext);

export default useCollapseDrawer;
