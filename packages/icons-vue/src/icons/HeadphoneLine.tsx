// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeadphoneLineSvg from '@airclass/icons-svg/lib/asn/HeadphoneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeadphoneLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphoneLineSvg}></AntdIcon>;
};

HeadphoneLine.displayName = 'HeadphoneLine';
HeadphoneLine.inheritAttrs = false;
export default HeadphoneLine;