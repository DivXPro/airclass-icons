// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilterOffLineSvg from '@airclass/icons-svg/lib/asn/FilterOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterOffLineSvg}></AntdIcon>;
};

FilterOffLine.displayName = 'FilterOffLine';
FilterOffLine.inheritAttrs = false;
export default FilterOffLine;