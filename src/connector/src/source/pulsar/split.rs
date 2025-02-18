// Copyright 2023 RisingWave Labs
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use anyhow::anyhow;
use risingwave_common::types::JsonbVal;
use serde::{Deserialize, Serialize};

use crate::source::pulsar::topic::Topic;
use crate::source::pulsar::PulsarEnumeratorOffset;
use crate::source::{SplitId, SplitMetaData};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Hash)]
pub struct PulsarSplit {
    pub(crate) topic: Topic,
    pub(crate) start_offset: PulsarEnumeratorOffset,
}

impl SplitMetaData for PulsarSplit {
    fn id(&self) -> SplitId {
        // TODO: should avoid constructing a string every time
        self.topic.to_string().into()
    }

    fn restore_from_json(value: JsonbVal) -> anyhow::Result<Self> {
        serde_json::from_value(value.take()).map_err(|e| anyhow!(e))
    }

    fn encode_to_json(&self) -> JsonbVal {
        serde_json::to_value(self.clone()).unwrap().into()
    }

    fn update_with_offset(&mut self, start_offset: String) -> anyhow::Result<()> {
        let start_offset = if start_offset.is_empty() {
            PulsarEnumeratorOffset::Earliest
        } else {
            PulsarEnumeratorOffset::MessageId(start_offset)
        };

        self.start_offset = start_offset;
        Ok(())
    }
}
