// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileSettingsLineSvg from '@airclass/icons-svg/lib/asn/FileSettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSettingsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileSettingsLineSvg}></AntdIcon>;
};

FileSettingsLine.displayName = 'FileSettingsLine';
FileSettingsLine.inheritAttrs = false;
export default FileSettingsLine;