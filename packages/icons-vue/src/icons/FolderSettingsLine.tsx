// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderSettingsLineSvg from '@airclass/icons-svg/lib/asn/FolderSettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderSettingsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderSettingsLineSvg}></AntdIcon>;
};

FolderSettingsLine.displayName = 'FolderSettingsLine';
FolderSettingsLine.inheritAttrs = false;
export default FolderSettingsLine;