// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SortDescSvg from '@airclass/icons-svg/lib/asn/SortDesc';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortDesc = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortDescSvg}></AntdIcon>;
};

SortDesc.displayName = 'SortDesc';
SortDesc.inheritAttrs = false;
export default SortDesc;