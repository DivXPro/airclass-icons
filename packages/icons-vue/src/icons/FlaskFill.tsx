// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlaskFillSvg from '@airclass/icons-svg/lib/asn/FlaskFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlaskFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlaskFillSvg}></AntdIcon>;
};

FlaskFill.displayName = 'FlaskFill';
FlaskFill.inheritAttrs = false;
export default FlaskFill;