// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlaskLineSvg from '@airclass/icons-svg/lib/asn/FlaskLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlaskLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlaskLineSvg}></AntdIcon>;
};

FlaskLine.displayName = 'FlaskLine';
FlaskLine.inheritAttrs = false;
export default FlaskLine;