// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NpmjsLineSvg from '@airclass/icons-svg/lib/asn/NpmjsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NpmjsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NpmjsLineSvg}></AntdIcon>;
};

NpmjsLine.displayName = 'NpmjsLine';
NpmjsLine.inheritAttrs = false;
export default NpmjsLine;