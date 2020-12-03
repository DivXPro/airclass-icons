// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckLineSvg from '@airclass/icons-svg/lib/asn/CheckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckLineSvg}></AntdIcon>;
};

CheckLine.displayName = 'CheckLine';
CheckLine.inheritAttrs = false;
export default CheckLine;