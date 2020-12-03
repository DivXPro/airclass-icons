// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilterFillSvg from '@airclass/icons-svg/lib/asn/FilterFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilterFillSvg}></AntdIcon>;
};

FilterFill.displayName = 'FilterFill';
FilterFill.inheritAttrs = false;
export default FilterFill;