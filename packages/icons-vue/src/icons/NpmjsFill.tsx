// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NpmjsFillSvg from '@airclass/icons-svg/lib/asn/NpmjsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NpmjsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NpmjsFillSvg}></AntdIcon>;
};

NpmjsFill.displayName = 'NpmjsFill';
NpmjsFill.inheritAttrs = false;
export default NpmjsFill;