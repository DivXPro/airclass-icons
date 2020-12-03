// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilterLineSvg from '@airclass/icons-svg/lib/asn/FilterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterLineSvg}></AntdIcon>;
};

FilterLine.displayName = 'FilterLine';
FilterLine.inheritAttrs = false;
export default FilterLine;