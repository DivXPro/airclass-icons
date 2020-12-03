// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TShirtLineSvg from '@airclass/icons-svg/lib/asn/TShirtLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TShirtLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TShirtLineSvg}></AntdIcon>;
};

TShirtLine.displayName = 'TShirtLine';
TShirtLine.inheritAttrs = false;
export default TShirtLine;