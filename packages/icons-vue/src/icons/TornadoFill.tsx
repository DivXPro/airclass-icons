// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TornadoFillSvg from '@airclass/icons-svg/lib/asn/TornadoFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TornadoFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TornadoFillSvg}></AntdIcon>;
};

TornadoFill.displayName = 'TornadoFill';
TornadoFill.inheritAttrs = false;
export default TornadoFill;