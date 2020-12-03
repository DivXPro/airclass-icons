// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileShieldFillSvg from '@airclass/icons-svg/lib/asn/FileShieldFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileShieldFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileShieldFillSvg}></AntdIcon>;
};

FileShieldFill.displayName = 'FileShieldFill';
FileShieldFill.inheritAttrs = false;
export default FileShieldFill;