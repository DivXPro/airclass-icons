// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SearchEyeLineSvg from '@airclass/icons-svg/lib/asn/SearchEyeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchEyeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchEyeLineSvg}></AntdIcon>;
};

SearchEyeLine.displayName = 'SearchEyeLine';
SearchEyeLine.inheritAttrs = false;
export default SearchEyeLine;