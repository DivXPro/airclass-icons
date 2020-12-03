// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PatreonFillSvg from '@airclass/icons-svg/lib/asn/PatreonFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PatreonFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PatreonFillSvg}></AntdIcon>;
};

PatreonFill.displayName = 'PatreonFill';
PatreonFill.inheritAttrs = false;
export default PatreonFill;