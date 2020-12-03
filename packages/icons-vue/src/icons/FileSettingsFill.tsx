// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileSettingsFillSvg from '@airclass/icons-svg/lib/asn/FileSettingsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSettingsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileSettingsFillSvg}></AntdIcon>;
};

FileSettingsFill.displayName = 'FileSettingsFill';
FileSettingsFill.inheritAttrs = false;
export default FileSettingsFill;