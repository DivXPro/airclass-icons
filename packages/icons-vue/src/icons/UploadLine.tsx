// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UploadLineSvg from '@airclass/icons-svg/lib/asn/UploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UploadLineSvg}></AntdIcon>;
};

UploadLine.displayName = 'UploadLine';
UploadLine.inheritAttrs = false;
export default UploadLine;