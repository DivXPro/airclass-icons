// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlutterFillSvg from '@airclass/icons-svg/lib/asn/FlutterFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlutterFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlutterFillSvg}></AntdIcon>;
};

FlutterFill.displayName = 'FlutterFill';
FlutterFill.inheritAttrs = false;
export default FlutterFill;