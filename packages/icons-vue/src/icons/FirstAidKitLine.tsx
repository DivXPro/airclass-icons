// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FirstAidKitLineSvg from '@airclass/icons-svg/lib/asn/FirstAidKitLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FirstAidKitLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FirstAidKitLineSvg}></AntdIcon>;
};

FirstAidKitLine.displayName = 'FirstAidKitLine';
FirstAidKitLine.inheritAttrs = false;
export default FirstAidKitLine;