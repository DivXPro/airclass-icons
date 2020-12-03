// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TornadoLineSvg from '@airclass/icons-svg/lib/asn/TornadoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TornadoLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TornadoLineSvg}></AntdIcon>;
};

TornadoLine.displayName = 'TornadoLine';
TornadoLine.inheritAttrs = false;
export default TornadoLine;