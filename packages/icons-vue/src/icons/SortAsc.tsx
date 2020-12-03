// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SortAscSvg from '@airclass/icons-svg/lib/asn/SortAsc';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortAsc = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortAscSvg}></AntdIcon>;
};

SortAsc.displayName = 'SortAsc';
SortAsc.inheritAttrs = false;
export default SortAsc;