// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VuejsLineSvg from '@airclass/icons-svg/lib/asn/VuejsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VuejsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VuejsLineSvg}></AntdIcon>;
};

VuejsLine.displayName = 'VuejsLine';
VuejsLine.inheritAttrs = false;
export default VuejsLine;