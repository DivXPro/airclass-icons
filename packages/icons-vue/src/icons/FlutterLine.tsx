// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlutterLineSvg from '@airclass/icons-svg/lib/asn/FlutterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlutterLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlutterLineSvg}></AntdIcon>;
};

FlutterLine.displayName = 'FlutterLine';
FlutterLine.inheritAttrs = false;
export default FlutterLine;