// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DisqusFillSvg from '@airclass/icons-svg/lib/asn/DisqusFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DisqusFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DisqusFillSvg}></AntdIcon>;
};

DisqusFill.displayName = 'DisqusFill';
DisqusFill.inheritAttrs = false;
export default DisqusFill;