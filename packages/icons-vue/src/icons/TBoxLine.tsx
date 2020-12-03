// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TBoxLineSvg from '@airclass/icons-svg/lib/asn/TBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TBoxLineSvg}></AntdIcon>;
};

TBoxLine.displayName = 'TBoxLine';
TBoxLine.inheritAttrs = false;
export default TBoxLine;