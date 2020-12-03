// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EjectFillSvg from '@airclass/icons-svg/lib/asn/EjectFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EjectFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EjectFillSvg}></AntdIcon>;
};

EjectFill.displayName = 'EjectFill';
EjectFill.inheritAttrs = false;
export default EjectFill;